import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Math Toys</Tab>
        <Tab>Language Toys</Tab>
        <Tab>Engineering Toys</Tab>
      </TabList>

      <TabPanel>
        <h2>Math Toys</h2>
        {/* Render the list of math toys */}
        {/* Each toy should have picture, name, price, rating, and view details button */}
      </TabPanel>

      <TabPanel>
        <h2>Language Toys</h2>
        {/* Render the list of language toys */}
        {/* Each toy should have picture, name, price, rating, and view details button */}
      </TabPanel>

      <TabPanel>
        <h2>Engineering Toys</h2>
        {/* Render the list of engineering toys */}
        {/* Each toy should have picture, name, price, rating, and view details button */}
      </TabPanel>
    </Tabs>
  );
};

export default Category;
