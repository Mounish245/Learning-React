const heading = React.createElement("h1", {}, "React Basics!");
        const heading1 = React.createElement("h1", { id : "title"}, "Heading 1");
        const heading2 = React.createElement("h1", { id : "title"}, "Heading 2");
        const Container = React.createElement("div", {id: "container"},[heading, heading1, heading2]);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(Container);