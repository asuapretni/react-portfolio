import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    // State
    // Lifecycle hooks
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios.get('https://asuapretni.devcamp.space/portfolio/portfolio_items')
        .then(response => {
          // handle success
          //console.log("response data", response);
          this.setState({
            data: response.data.portfolio_items
          });
        })
        .catch( error => {
          // handle error
          console.log(error);
        });
    }

    portfolioItems() {
        // Data that we'll need:
        // - background image: thumb_image_url
        // - logo 
        // - description: description
        // - id: id
        // ['id', 'name', 'description', 'url', 'category', 'position', 'thumb_image_url', 'banner_image_url', 'logo_url', 'column_names_merged_with_images']
        return this.state.data.map(item => {
            debugger;
            return <PortfolioItem key={item.id} title={item.name} des={item.description} url={item.url} slug={item.id} />;
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }


        return (
            <div>
               <h2>{this.state.pageTitle}</h2> 

               <button onClick={() => this.handleFilter("eCommerce")}>eCommerce</button>
               <button onClick={() => this.handleFilter("Scheduling")}>Scheduling</button>
               <button onClick={() => this.handleFilter("Enterprise")}>Enterprise</button>
                 
                {this.portfolioItems()}

            </div>
        )
    }
}