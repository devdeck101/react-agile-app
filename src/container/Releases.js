import React, { Component } from 'react';

export default class Releases extends Component {

    constructor() {
        super();
        this.state = {
            releases: [
                {
                    id: 1,
                    releaseName: 'Release 01',
                    releaseDate: '01/01/2017'
                },
                {
                    id: 2,
                    releaseName: 'Release 02',
                    releaseDate: '01/01/2018'
                },
                {
                    id: 3,
                    releaseName: 'Release 03',
                    releaseDate: '01/01/2019'
                },
                {
                    id: 4,
                    releaseName: 'Release 04',
                    releaseDate: '01/01/2020'
                }
            ]
        }
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Release Name</th>
                        <th>Release Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.releases.map((release, index) => {
                        return (
                            <tr key={release.id}>
                                <th scope="row">{release.id}</th>
                                <td>{release.releaseName}</td>
                                <td>{release.releaseDate}</td>
                                <td><button type="button" className="btn btn-danger btn-sm">Danger</button></td>
                            </tr>
                        )
                    })}

                </tbody>
            </table>

        );
    }
}