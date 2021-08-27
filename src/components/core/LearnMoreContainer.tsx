import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        marginLeft: '0%',
    },
    treeDetails: {

    }
});

const LearnMoreContainer = (props: any) => {
    const classes = useStyles();
    const dontShowLearnMore = () => {
        props.showLearnMore(false, null)
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" className={classes.root}>
                <Paper>
                    <img alt="trees" src={props.ImageURL} style={{ height: '70vh', width: '100%' }} />
                </Paper>

            </Container>
            <Container maxWidth="sm" className={classes.treeDetails}>
                <Paper elevation={0}>
                    <h1>{props.CommonName}</h1>
                    <h2>Binomial Name: {props.BinomialName}</h2>
                    <h3>Climate: {props.Climate}</h3>
                    <h3>Evergreen: {props.Evergreen}</h3>
                    <h3>ProducesFruits: {props.ProducesFruits}</h3>
                    <h3>TypicalMaxHeightM: {props.TypicalMaxHeightM}</h3>
                    <h3>ImageCredit: {props.ImageCredit}</h3>

                    <Button size="small" color="primary" onClick={dontShowLearnMore}>
                        Go back
                    </Button>
                </Paper>
            </Container>
        </React.Fragment>
    );
}


export default LearnMoreContainer;