import React from "react";

class Map extends React.Component {
    state = {
        backgroundColor: `tomato`
    };

    componentDidMount() {
        this.setState({
            backgroundColor: `dodgerblue`
        })

        //NYPD Criminal Court Summons
        // fetch('https://data.cityofnewyork.us/resource/sv2w-rv3k.json')
        //     .then(res=>res.json())
        //     .then(data=>console.log(data))
        //NYPD Shooting Incident Data YTD
        // fetch('https://data.cityofnewyork.us/resource/qgea-i56i.json')
        //     .then(res=>res.json())
        //     .then(data=>console.log(data))

        //NYPD Arrest Data YTD
        // fetch('https://data.cityofnewyork.us/resource/uip8-fykc.json')
        //     .then(res=>res.json())
        //     .then(data=>console.log(data))

        //NYPD Arrest Data Historic
            fetch('https://data.cityofnewyork.us/resource/8h9b-rp9u.json')
                .then(res=>res.json())
                .then(data=>console.log(data))



    };

    render() {
        return(<div style={{ 
                        backgroundColor: `${this.state.backgroundColor}` 
                    }} className="map">
            Hello this is a map
        </div>);
    };
};

export default Map;