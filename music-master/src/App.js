import React, { Component } from "react";
import "./App.css";
import { FormGroup, FormControl, InputGroup, Glyphicon } from "react-bootstrap";
import Profile from "./Profile";
import Gallery from "./Gallery";
// const express = require('express');
// const request = require('request');
// const base64 = require('base-64');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      artist: null,
      tracks: []
    };
  }




  search() {
    console.log("this.state", this.state);
    const BASE_URL = "https://api.spotify.com/v1/search?";
    let FETCH_URL = BASE_URL + "q=" + this.state.query + "&type=artist&limit=1";
    const ALBUM_URL = "https://api.spotify.com/v1/artists/";
    var accessToken =
      "BQCWCL0KhxsCCfk6gyB8en1Bwa0Fc3OBCq6_1FhiMdk4CzheyfOnefcponCLi47HKv_nFYRgdGzPnMemQWSIMqbEAr9IF9ToM7la7KIOY4YR_0421JukV74kme2_nfZrQyuBzVfY70CVvjbmD8C-FboOUweu-V0xlNl5PQ&refresh_token=AQDFkpAcjcy3Sb4kKzvzOT0d1pwtKdYvSQJJeDpFBdhRYPQOxoSOIq2FrmIC5t3nbabOvDSelK4PSKDM6uJkqZkplFjC-2FIb_0gqW7EtNEXIDErBs3SrHO1Y9vbd1irkORNsQ";

    fetch(FETCH_URL, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken
      },
      mode: "cors",
      cache: "default"
    })
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        this.setState({ artist });

        FETCH_URL = `${ALBUM_URL}${artist.id}/top-tracks?country=US&`;
        fetch(FETCH_URL, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + accessToken
          },
          mode: "cors",
          cache: "default"
        })
        .then(response => response.json())
        .then(json => {
          console.log('artist\'s top tracks:', json);
          const { tracks } = json;
          this.setState({tracks});
          });
      });
  }

 

  render() {
    return (
      <div className="App">
        <div className="App-title">Song Player Thingamajig</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an Artist"
              value={this.state.query}
              onChange={event => {
                this.setState({ query: event.target.value });
              }}
              onKeyPress={event => {
                if (event.key === "Enter") {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search" />
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {this.state.artist !== null ? (
          <div>
            <Profile artist={this.state.artist} />
            <Gallery tracks={this.state.tracks} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default App;
