
const Blogs = () => {
    return (
        <div className="pl-28 space-y-3 my-12">
            <div>
                <p className=""><span className="font-bold mr-5">Q.</span>What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                <p className=""><span className="font-bold mr-5 underline">Ans.</span>An access token is a credential for accessing protected resources, while a refresh token is used to obtain a new access token when the original one expires. They should be securely stored on the client-side, such as in secure storage mechanisms provided by the operating system or using browser-based storage options like HTTP-only cookies or local storage with proper encryption and access control.</p>
            </div>
            <div>
                <p className=""><span className="font-bold mr-5">Q.</span>Compare SQL and NoSQL databases?</p>
                <p className=""><span className="font-bold mr-5 underline">Ans.</span>SQL databases are relational and use structured query language for data management, providing strong consistency, ACID transactions, and predefined schemas. NoSQL databases are non-relational, offering flexible data models, horizontal scalability, eventual consistency, and can handle unstructured or semi-structured data.</p>
            </div>
            <div>
                <p className=""><span className="font-bold mr-5">Q.</span>What is express js? What is Nest JS (google it)?</p>
                <p className=""><span className="font-bold mr-5 underline">Ans.</span>Express.js is a minimalist web application framework for Node.js, providing a simple and flexible way to build web applications and APIs. Nest.js is a progressive, TypeScript-based framework for building scalable and efficient server-side applications, leveraging concepts from Angular and Express.js to create a modular and extensible architecture.</p>
            </div>
            <div>
                <p className=""><span className="font-bold mr-5">Q.</span>What is MongoDB aggregate and how does it work (google it)?</p>
                <p className=""><span className="font-bold mr-5 underline">Ans.</span>MongoDB's aggregate is a framework for performing advanced data processing operations and transformations on the data stored in MongoDB. It allows you to perform tasks like filtering, grouping, joining, and aggregating data using a pipeline of stages. Each stage applies a specific operation to the data, and the output of one stage serves as the input for the next, allowing for powerful data manipulations and analytics.</p>
            </div>
        </div>
    );
};

export default Blogs;