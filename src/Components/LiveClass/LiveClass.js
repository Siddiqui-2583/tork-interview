import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    },
    cardContent: {
        border: "1px solid black",
        borderRadius: "10px",
        width: "300px",
        // marginBottom: "20px",
        margin: "20px auto",
        justifyContent: "center"
  }
});
const LiveClass = (props) => {
  const classes = useStyles();
  console.log(props.liveClass);
  const {
    course_title,
    ending_time,
    id,
    live_type,
    meeting_id,
    meeting_password,
    starting_time,
    title,
    user_id,
    user_name,
  } = props.liveClass;
  console.log(course_title);
  return (
    <div className={classes.root}>
      {/* <h2>{course_title}</h2> */}
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.title}
            color="textSecondary"
            variant="h5"
            component="h2"
          >
            {course_title}
          </Typography>
          <Typography >
            {ending_time}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {user_name}
          </Typography>
          <Typography variant="body2" component="p">
            {title}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveClass;
