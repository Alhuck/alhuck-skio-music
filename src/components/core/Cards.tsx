import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: '2%'
    },
});

const Cards = (props: any) => {
    const classes = useStyles();

    const showLearnMore = () => {
        props.showLearnMore(true, props.details)
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={props.details.CommonName}
                    height="140"
                    image={props.details.ImageURL}
                    title={props.details.CommonName}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.details.CommonName}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Binomial Name: {props.details.BinomialName}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={showLearnMore}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

export default Cards;