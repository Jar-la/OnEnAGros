import React from "react";
import Header from "./Header";
import Center from "./Center";
import SidebarR from "./Sidebar";



class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      equiList:{
        "carbone dioxide": "Dioxyde de carbone",
        "carbone monoxide": "Monoxyde de carbone",
        dinitrogen: "Diazote",
        dioxygene: "Dioxygène",
        "legionelle pneumophilia": "Legionelle pneumonia",
        "nitrogen dioxide":"Dioxyde d'azote",
        "sulphur dioxide": "Dioxyde de souffre",
        "atmospheric pressure": "Pression atmosphérique",
        "energy use": "Consommation",
        food: 0,
        "escherichia coli": "Eschericha coli",
        "listeria monocytogenes": "Listeria monocytogenes",
        "salmonella enterica": "Salmonella enterica",
        temperature: "Température",
        bicarbonate: "Bicarbonate",
        calcium: "Calcium",
        chlorures: "Chlorures",
        florures: "Fluorures",
        "heavy metals": "Métaux lourds",
        magnesium: "Magnésium",
        nitrates: "Nitrates",
        silice: "Silice",
        sodium: "Sodium",
        sulfates: "Sulfates",
        "vibrio cholerea": "Vibrio cholerea",
      }
    };
  }
  render() {
    console.log(this.props.doc);
    return (
      <div className="Board">
        <Header data={this.props.data["breaking news"]} />
        <SidebarR data={this.props.data.data} />
        <Center data={this.props.data} />
        <SidebarR data={this.props.data.data} />
      </div>
    );
  }
}

export default Board;
