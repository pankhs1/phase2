import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Notification from '../UserCompanyNotifiaction/NotificationCard/notification'

const styles = theme => ({
  root: {
    
  },
  heading: {
    
  },
});

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div >
    <div className="row">
    
      <ExpansionPanel>
      
        <ExpansionPanelSummary >
         
       

        </ExpansionPanelSummary>
        
        <ExpansionPanelDetails>
        
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>
      <ExpansionPanel>
      
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
           <Notification/>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel disabled>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);
