import React from 'react';
import { Search } from '../Components/Search';
import { Movies } from '../Components/Movies';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    searchForCaption = (caption, type='all') => {
        this.setState({loading: true});

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${caption}${
                type !== 'all' ? `&type=${type}` : ''
            }`)
            .then(responce => responce.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(responce => responce.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    render() {
        const { movies, loading } = this.state;
        return <div className='main'>
            <Search searchForCaption={this.searchForCaption}/>
            { 
                loading ? (
                    <div className="preloader"></div>
                    ) : (
                    <Movies movies={movies}/>
                )
            }
        </div>
    }
}

export { Main };