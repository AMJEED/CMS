import { Button, Divider } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './CourseCard.module.css'


const CourseCard = ({title,name,id}) => {
    return (
        <>
        <div className={Styles.course__Card}>
            <Link to={`/course/${id}`} className={Styles.container}>
            <img className={Styles.image} src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=""/>
            <div className={Styles.overlay}>
            <p className={Styles.text}>View</p>
            </div>
            </Link>
            
            
            <div className={Styles.course__content}>
                <span>Jan-Jun 2021</span>
                <h5>ICE3101_12539_B</h5>
                <h5>Analysis and Design of Algorithm ICE3101_12539_B</h5>
                <Button color='primary' variant="contained" >Published</Button><br/>
                <span>This is a course template which is to be used as the course kit for the teachers.</span>
            </div>
            
        </div>
        <Divider/>
        </>
    );
};

export default CourseCard;