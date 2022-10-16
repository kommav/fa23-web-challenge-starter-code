import MainHeader from "../components/main-header";
import styles from "../styles/index.module.scss";
import Document from "next/document";

const Index = () => {
    return (
        <body>
            <h1>HackIllinois Events</h1>
            {/* <table>
                <tr>
                    <td>
                        <h4 id = "name0"></h4> 
                        <p id = "desc0"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name1"></h4> 
                        <p id = "desc1"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name2"></h4> 
                        <p id = "desc2"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name3"></h4> 
                        <p id = "desc3"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name4"></h4> 
                        <p id = "desc4"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name5"></h4> 
                        <p id = "desc5"></p>
                    </td>
                </tr><tr>
                    <td>
                        <h4 id = "name6"></h4> 
                        <p id = "desc6"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name7"></h4> 
                        <p id = "desc7"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name8"></h4> 
                        <p id = "desc8"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name9"></h4> 
                        <p id = "desc9"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name10"></h4> 
                        <p id = "desc10"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name11"></h4> 
                        <p id = "desc11"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name12"></h4> 
                        <p id = "desc12"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name13"></h4> 
                        <p id = "desc13"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name14"></h4> 
                        <p id = "desc14"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name15"></h4> 
                        <p id = "desc15"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name16"></h4> 
                        <p id = "desc17"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name18"></h4> 
                        <p id = "desc18"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name19"></h4> 
                        <p id = "desc19"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name20"></h4> 
                        <p id = "desc20"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name21"></h4> 
                        <p id = "desc21"></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h4 id = "name22"></h4> 
                        <p id = "desc22"></p>
                    </td>
                </tr>
            </table> */}
            <h4 id = "name0"></h4> 
            <p id = "desc0"></p>
            <h4 id = "name1"></h4> 
            <p id = "desc1"></p> 
            <h4 id = "name2"></h4> 
            <p id = "desc2"></p> 
            <h4 id = "name3"></h4> 
            <p id = "desc3"></p> 
            <h4 id = "name4"></h4> 
            <p id = "desc4"></p> 
            <h4 id = "name5"></h4> 
            <p id = "desc5"></p>
            <h4 id = "name6"></h4> 
            <p id = "desc6"></p> 
            <h4 id = "name7"></h4> 
            <p id = "desc7"></p> 
            <h4 id = "name8"></h4> 
            <p id = "desc8"></p> 
            <h4 id = "name9"></h4> 
            <p id = "desc9"></p> 
            <h4 id = "name10"></h4> 
            <p id = "desc10"></p> 
            <h4 id = "name11"></h4> 
            <p id = "desc11"></p> 
            <h4 id = "name12"></h4> 
            <p id = "desc12"></p> 
            <h4 id = "name13"></h4> 
            <p id = "desc13"></p> 
            <h4 id = "name14"></h4> 
            <p id = "desc14"></p> 
            <h4 id = "name15"></h4> 
            <p id = "desc15"></p> 
            <h4 id = "name16"></h4> 
            <p id = "desc16"></p> 
            <h4 id = "name17"></h4> 
            <p id = "desc17"></p> 
            <h4 id = "name18"></h4> 
            <p id = "desc18"></p> 
            <h4 id = "name19"></h4> 
            <p id = "desc19"></p> 
            <h4 id = "name20"></h4> 
            <p id = "desc20"></p> 
            <h4 id = "name21"></h4> 
            <p id = "desc21"></p> 
            <h4 id = "name22"></h4> 
            <p id = "desc22"></p> 
        </body>
    );
};
// for (let i = 0; i < 23; i++) {
//         getData(i)
// }
// function getData(i) {
    fetch('https://api.hackillinois.org/event/') 
        .then(res => res.json())
        .then(data => {
            console.log(data.events[0])
            document.getElementById("name0").innerHTML = data.events[0].name
            document.getElementById("desc0").innerHTML = data.events[0].description
            document.getElementById("name1").innerHTML = data.events[1].name
            document.getElementById("desc1").innerHTML = data.events[1].description
            document.getElementById("name2").innerHTML = data.events[2].name
            document.getElementById("desc2").innerHTML = data.events[2].description
            document.getElementById("name3").innerHTML = data.events[3].name
            document.getElementById("desc3").innerHTML = data.events[3].description
            document.getElementById("name4").innerHTML = data.events[4].name
            document.getElementById("desc4").innerHTML = data.events[4].description
            document.getElementById("name5").innerHTML = data.events[5].name
            document.getElementById("desc5").innerHTML = data.events[5].description
            document.getElementById("name6").innerHTML = data.events[6].name
            document.getElementById("desc6").innerHTML = data.events[6].description
            document.getElementById("name7").innerHTML = data.events[7].name
            document.getElementById("desc7").innerHTML = data.events[7].description
            document.getElementById("name8").innerHTML = data.events[8].name
            document.getElementById("desc8").innerHTML = data.events[8].description
            document.getElementById("name9").innerHTML = data.events[9].name
            document.getElementById("desc9").innerHTML = data.events[9].description
            document.getElementById("name10").innerHTML = data.events[10].name
            document.getElementById("desc10").innerHTML = data.events[10].description
            document.getElementById("name11").innerHTML = data.events[11].name
            document.getElementById("desc11").innerHTML = data.events[11].description
            document.getElementById("name12").innerHTML = data.events[12].name
            document.getElementById("desc12").innerHTML = data.events[12].description
            document.getElementById("name13").innerHTML = data.events[13].name
            document.getElementById("desc13").innerHTML = data.events[13].description
            document.getElementById("name14").innerHTML = data.events[14].name
            document.getElementById("desc14").innerHTML = data.events[14].description
            document.getElementById("name15").innerHTML = data.events[15].name
            document.getElementById("desc15").innerHTML = data.events[15].description
            document.getElementById("name16").innerHTML = data.events[16].name
            document.getElementById("desc16").innerHTML = data.events[16].description
            document.getElementById("name17").innerHTML = data.events[17].name
            document.getElementById("desc17").innerHTML = data.events[17].description
            document.getElementById("name18").innerHTML = data.events[18].name
            document.getElementById("desc18").innerHTML = data.events[18].description
            document.getElementById("name19").innerHTML = data.events[19].name
            document.getElementById("desc19").innerHTML = data.events[19].description
            document.getElementById("name20").innerHTML = data.events[20].name
            document.getElementById("desc20").innerHTML = data.events[20].description
            document.getElementById("name21").innerHTML = data.events[21].name
            document.getElementById("desc21").innerHTML = data.events[21].description
            document.getElementById("name22").innerHTML = data.events[22].name
            document.getElementById("desc22").innerHTML = data.events[22].description
        })
        .catch(error => console.log('ERROR'))
// } 

// console.log(data.events[0])

// let allEvents = '';
// getData().then(data => {
//     allEvents = data
// });
// console.log(allEvents)

export default Index;


// function getData() {
//     return new Promise((resolve, reject) => {
//         fetch('https://api.hackillinois.org/event/')
//             .then(response => {
//             return response.json();
//             }).then(data_from_fetched => {
//             let data = data_from_fetched.results;
//             resolve(data);
//             }
//     )}    

// const getData = () => fetch('https://api.hackillinois.org/event/').then(response => response.json()).then(({results}) => results);
// console.log(getData);