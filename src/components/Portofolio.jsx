import React, { useState } from 'react';
import ToDoItem from "./ToDoItem";
import PortfolioItem from './PortofolioItem';

function Portfolio() {
    // State for managing popup visibility, image, and description
    const [popupVisible, setPopupVisible] = useState(false);
    const [todoPopupVisible, setTodoPopupVisible] = useState(false);
    const [popupImage, setPopupImage] = useState('');
    const [popupDescription, setPopupDescription] = useState('');

    // Function to open the popup with image and description
    const openPopup = (image, description) => {
        setPopupImage(image);
        setPopupDescription(description);
        setPopupVisible(true); // Show the popup
    };

    // Function to close the popup
    const closePopup = () => {
        setPopupVisible(false); // Hide the popup
    };

    const openTodoPopup = () => {
        setTodoPopupVisible(true);
    };

    const closeTodoPopup = () => {
        setTodoPopupVisible(false);
    };

    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem() {
        setItems(prevItems => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    }

    const portfolioImages = [
        {
            imgSrc: "Client-Server Pharmacy.png",
            altText: "Client-Server Pharmacy Application",
            description: "The application is designed to manage the inventory of medications and facilitate various operations concerning them. Users are granted different levels of access and permissions based on their roles, such as employee, manager, or administrator. The application employs a ClientServer architecture to ensure a clear separation between the presentation logic, the application data, and user interaction. This separation promotes code reusability and facilitates unit testing.",
            popupImage: "Client_Server Poza.png"
        },
        {
            imgSrc: "Energy System Management.png",
            altText: "Energy Management System",
            description: "The Energy Management System is an application built with Java Spring and React, following a microservice architecture. The microservices communicate via REST APIs. The frontend, developed with React, provides features such as authentication, user and device management, and energy consumption monitoring, using different databases. Additionally, a chat microservice has been developed, utilizing RabbitMQ and WebSockets for asynchronous messaging between users. On the security side, the project integrates Spring Security, implementing user authentication and authorization through token based security (JWT). Furthermore, the entire system has been designed for deployment using Docker.",
            popupImage: "Admin Poza.png"
        },
        {
            imgSrc: "Threads.png",
            altText: "Java Threads Simulation",
            description: "This project focuses on simulating clients standing in different lines using threads in Java. Each client is represented as a separate thread, and they stand in different queues, awaiting service.",
            popupImage: "Threads Poza.png"
        },
        {
            imgSrc: "Title Store.png",
            altText: "MVC Java Store Simulation",
            description: "This MVC project aims to simulate the process of buying products from a database using the Model-View-Controller architecture in Java. In this project, the Model represents the data structure of the products and the database interactions. The View is responsible for presenting the user interface, displaying available products, and facilitating user interaction. The Controller acts as an intermediary between the Model and the View, handling user input, processing requests, and updating the Model.",
            popupImage: "Store Poza.png"
        },
        {
            imgSrc: "Tasatura titlu.png",
            altText: "Tastatura",
            description: "This project focuses on the assembly language programming of a digital keyboard. This involves designing and implementing the functionality of a keyboard using low-level assembly instructions. Such a project could cover tasks such as handling keyboard input, processing keypresses, and all functionalities of the keyboard.",
            popupImage: "Tastatura.png"
        },
        {
            imgSrc: "Frontend Bootcamp Betfair.png",
            altText: "Frontend Bootcamp Betfair",
            description: "The React Frontend Bootcamp organized by Betfair in collaboration with DigitalStack, held between October and the end of November 2024, was an intensive training program designed to lay the foundations for developing the frontend part of a web application.",
            popupImage: "Betfair.png"
        }
    ];
    

    return (
        <div>
            <section className="work section" id="portfolio">
                <h2 className="section-title">Portfolio</h2>

                <div className="work__container bd-grid">
                {portfolioImages.map((image, index) => (
                        <PortfolioItem key={index} {...image} openPopup={openPopup} />
                    ))}
                </div>
                <div>
                    <button className="ToDoButton" onClick={openTodoPopup}>To-do List</button>
                </div>
            </section>

            {popupVisible && (
                <div className="popup" >
                    <div className="popup-inner" >
                        <button className="popup-close-button" onClick={closePopup}>X</button>
                        <img className="popup-img" src={popupImage} alt="Popup Visual" />
                        <p>{popupDescription}</p>
                    </div>
                </div>
            )}
            {todoPopupVisible && (
                <div className="popup">
                    <div className="popup-inner">
                        <button className="popup-close-button" onClick={closeTodoPopup}>X</button>
                        <div className="heading">
                            <h1>To-Do List</h1>
                            <h2>Press item for delete</h2>
                        </div>
                        <div className="form">
                            <input onChange={handleChange} type="text" value={inputText} />

                        </div>
                        <ul>
                            {items.map((todoItem, index) => (
                                <ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
                            ))}
                        </ul>
                        <button  className="ToDoButton" onClick={addItem}>
                            <span>Add</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Portfolio;
