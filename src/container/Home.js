import React, { Component } from 'react';
import HomeCard from '../ui/HomeCard';
export default class Home extends Component {

    homeCardReleases = {
        title: 'Releases',
        text: 'Manage Releases',
        action: () => alert('Releases Clicked')
    }
    homeCardBacklog = {
        title: 'Backlog',
        text: 'Manage Backlog',
        action: () => alert('Backlog Clicked')
    }
    homeCardSprints = {
        title: 'Sprints',
        text: 'Manage Sprints',
        action: () => alert('Sprints Clicked')
    }

    render() {
        return (
            <div className="container text-center">
                <div className="row">
                    <HomeCard title={this.homeCardReleases.title}
                        text={this.homeCardReleases.text}
                        action={this.homeCardReleases.action} />
                    <HomeCard {...this.homeCardBacklog} />
                    <HomeCard {...this.homeCardSprints} />
                </div>
            </div>
        );
    }
}