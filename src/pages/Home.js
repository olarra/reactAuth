import React from 'react';
import Main from '../components/Main';
import SideBar from '../components/SideBar';
import { Grid, Row, Col } from 'react-bootstrap';

export default () => (
    <div className="container">
    <Grid>
      <Row className="show-grid">
        <Col md={3}>
          <SideBar/>
        </Col>
        <Col md={8}>
          <Main/>
        </Col>
      </Row>
    </Grid>;

    </div>
);
