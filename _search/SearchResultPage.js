// import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
// import axios from "axios";
// //import Button from 'react-bootstrap/Button'
// //import { NavbarText } from 'react-bootstrap/Navbar';
// //import CardDeck from 'react-bootstrap/CardDeck'
// import { PerPageSearchResultCount } from "../clientMisc";
// import Paginations from "./Paginations";
// //import PageItem from 'react-bootstrap/PageItem'
// //import Navbar from 'react-bootstrap/Navbar'
// //import Nav from 'react-bootstrap/Nav'

// class SearchResultPage extends Component{
    
//     state = {
//         resultPageIndex: 1,
//         currentPage : 1,
//         docs: [],
//     }
//   searchAndGetResponse = () => {
//     console.log('C2 from index',this.props.c2)
//     let searchResponse = ""
//     let searchRes =  ""
//     let searchString   = this.props.searchString
//     if(searchString !== ""){
//         console.log("### Calling search")
//         let uri = 'http://localhost:5000/search/'
//         uri    += '?str='  + searchString
//         uri    += '&prpg=' + PerPageSearchResultCount
//         uri    += '&pg=0'    // SOUTBD: This index should change per page
//         // uri    += '&c1=' + this.state.c1
//         uri    += '&c2=' + this.props.c2
//         axios.get(encodeURI(uri))
//         .then(res => {
//           searchResponse = res.data.docs
//           const { index } = this.state;
//           searchRes = searchResponse.slice(index,PerPageSearchResultCount);
//           console.log("searchResponse: ",searchResponse)
//           this.setState({docs: searchResponse})
//         })
//     }
//     else{
//         let blankList = []
//         this.setState({resultPageIndex:0, docs: blankList})
//     }
// }
// shouldComponentUpdate(nextProps, nextState) {
//     console.log("### Should component update")
//     //console.log("this.props.searchString:",this.props.searchString)
//     //console.log("nextProps.searchString:",nextProps.searchString)
//     //console.log("this.state.docs:",this.state.docs)
//     //console.log("nextState.docs:",nextState.docs)
//     if (this.props.searchString !== nextProps.searchString){
//         console.log("    Returning 1.true")
//         return true
//     }
//     let thisDocCount  = this.state.docs ? this.state.docs.length : 0
//     let nextDocCount  = nextState.docs ? nextState.docs.length : 0
//     if (thisDocCount !== nextDocCount){ 
//         console.log("    Returning 2.true")
//         return true
//     }
//     for (var i = 0; i < thisDocCount; i++) { //SOUTBD: this is a costly operation. Bypass it.
//         if(this.state.docs[i].id !== nextState.docs[i].id){

//             console.log("    Returning 3.true")
//             return true
//         }
//     }

//     console.log("    Returning 4.false")
//     return false
// }

// componentDidUpdate(prevProps, prevState, snapShot){  //SOUTBD: Avoid search happening twice
//     console.log("### Component did update")
//     this.searchAndGetResponse()
// //    console.log(this.props.searchString)
// //    console.log("----------------")
// }
//         componentDidMount(){
//             console.log("### Component did mount")
//             this.searchAndGetResponse()
//         //    console.log(this.props.searchString)
//         //    console.log("----------------")
//         }


//  render(){
//     console.log("Doc length" ,this.state.docs.length)
//     return (
//     //console.log('ren:', this.state.docs)
//     //console.log("----------------")
//     <div>
//       <Paginations
//         docsPerPage={PerPageSearchResultCount}
//         totalDocs={this.props.gudData}
//         updateC2 = {this.props.updateC2}
//       />
//     </div>
//   );
// }
// };

// export default SearchResultPage;
