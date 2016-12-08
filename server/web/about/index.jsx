'use strict';
const Layout = require('../layouts/default.jsx');
const React = require('react');


class AboutPage extends React.Component {
    render() {

        return (
            <Layout
                title="About us"
                activeTab="about">

                <div className="row">
                    <div className="col-sm-6">
                        <h1 className="page-header">About us</h1>
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-plus fa-4px"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">MathGame</h4>
                                <p>
                                    MathGame or Mathattack is a student made math website
                                    created mainly for students to practice their basic
                                    math skills over the summer. We offer a variety of
                                    mini games that students can play. Our focus is to
                                    make math feel more fun for students so they are
                                    more motivated to learn.
                                </p>
                            </div>
                        </div>
                        <div className="media text-right">
                            <div className="pull-right">
                                <div className="media-object">
                                    <i className="fa fa-gamepad fa-4px"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">Group5</h4>
                                <p>
                                    Group5 is a small organization entirely made up
                                    of students. We strive to bring our users the
                                    best content we can possibly provide. As we
                                    continue to learn as students we take on new
                                    challenges in our projects to further ourselves
                                    as well as the things we create. As students we
                                    are not working for anybody other than
                                    ourselves so as a result we are entirely funded
                                    by donations. If you enjoy our site please
                                    donate, any amount will be appreciated. If you
                                    can't donate then please help in spreading our
                                    name and website. Thank you for coming to
                                    Mathgame and please enjoy your stay! :P
                                </p>
                            </div>
                        </div>
                        <div className="media">
                            <div className="pull-left">
                                <div className="media-object">
                                    <i className="fa fa-camera-retro fa-4x"></i>
                                </div>
                            </div>
                            <div className="media-body">
                                <h4 className="media-heading">The Build</h4>
                                <p>
                                    We've built this using, Javascript, and HTML
                                    for everything you see and all the behind
                                    the scenes logic. We make use of Mongodb
                                    as our primary database program as well as
                                    bcrypt for securing passwords and user info.
                                    Our games are implemented using phaser, a
                                    Javascript friendly HTML5 game
                                    framework.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 text-center">
                        <h1 className="page-header">Group5</h1>
                        <p className="lead">
                            We are the future
                        </p>
                        <i className="fa fa-gamepad bamf"></i>
                    </div>
                </div>
            </Layout>
        );
    }
}


module.exports = AboutPage;
