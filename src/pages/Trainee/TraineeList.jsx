/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Button, withStyles } from '@material-ui/core';
import { AddDialog } from './components/index';
import { TableComponent } from '../../components';
import trainees from './data/trainee';

const useStyles = (theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  dialog: {
    textAlign: 'right',
  },
});

class TraineeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,

      orderBy: '',
      order: 'asc',

    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    const { open } = this.state;
    this.setState({ open: false });
    return open;
  };

  handleSubmit = (data) => {
    this.setState({
      open: false,
    }, () => {
      console.log(data);
    });
  }


  handleSelect = (event) => {
    console.log(event);
  };

  handleSort = (field) => (event) => {
    const { order } = this.state;
    console.log(event);
    this.setState({
      orderBy: field,
      order: order === 'asc' ? 'desc' : 'asc',
    });
  };

  render() {
    const { open, order, orderBy } = this.state;
    const { classes } = this.props;

  render() {
    const { open } = this.state;
    const { match: { url }, classes } = this.props;

    return (
      <>
        <div className={classes.root}>
          <div className={classes.dialog}>
            <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
              ADD TRAINEELIST
            </Button>
            <AddDialog open={open} onClose={this.handleClose} onSubmit={() => this.handleSubmit} />
          </div>
          &nbsp;
          &nbsp;
          <TableComponent
            id="id"
            data={trainees}
            column={
              [
                {
                  field: 'name',
                  label: 'Name',


                  align: 'center',

                },
                {
                  field: 'email',
                  label: 'Email Address',

                  format: (value) => value && value.toUpperCase(),
                },
                {
                  field: 'createdAt',
                  label: 'Date',
                  align: 'right',
                  format: this.getDateFormat,
                },
              ]
            }
            onSort={this.handleSort}
            orderBy={orderBy}
            order={order}
            onSelect={this.handleSelect}
          />

                },
              ]
            }
          />
          <ul>
            {trainees.map(({ name, id }) => (
              <li key={id}>
                <Link to={`${url}/${id}`}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
TraineeList.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default withStyles(useStyles)(TraineeList);
