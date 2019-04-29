import React, {Component} from "react";
import link from "gatsby-link";

const NavLink = props => {
	if(!props.test){
		return <Link to={props.url}>{props.text}</Link>
	}else{
		return <span>{props.text}</span>
	}
};

