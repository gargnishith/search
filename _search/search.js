import React, { Component,useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
// import SearchResultPage from './SearchResultPage'
import axios from "axios";
import { PerPageSearchResultCount } from "../clientMisc";
import Paginations from "./Paginations";
import { Prev } from "react-bootstrap/PageItem";

const Search = ({searchString}) => {
    const [c2, SetC2] = useState(-1)
    const [data, SetData] = useState([])
    const [first , SetFirst] = useState(true)

    let updateC2 = (newC2) => {
        SetC2(newC2)
        SetFirst(true)
    }

        let getData = () =>{
        console.log('C2 from index',c2)
        let searchResponse = ""
        if(searchString !== ""){
            console.log("### Calling search")
            let uri = 'http://localhost:5000/search/'
            uri    += '?str='  + searchString
            uri    += '&prpg=' + PerPageSearchResultCount
            uri    += '&pg=0'    // SOUTBD: This index should change per page
            // uri    += '&c1=' + this.state.c1
            uri    += '&c2=' + c2
            axios.get(uri)
            .then(res => {
              searchResponse = res.data.docs
            //   const { index } = this.state;
            //   searchRes = searchResponse.slice(index,PerPageSearchResultCount);
              //console.log("searchResponse: ",searchResponse)
              console.log('DATA FROM INDEX', searchResponse)
              SetData(searchResponse)
              SetFirst(false)
            })
    }
} 
        if(first){
            getData()
        }

        return(
            <div>
            <Paginations
              docsPerPage={PerPageSearchResultCount}
              totalDocs={data}
              updateC2 = {updateC2}
              searchString = {searchString}
            />
            <div onClick={() => SetC2(prev => prev + 1)}>Test Div</div>
          </div>
        )
}

export default withRouter(Search);