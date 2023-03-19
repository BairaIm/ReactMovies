import React from 'react';
import { Search } from '../Components/Search';
import { Movies } from '../Components/Movies';
import { Pagination } from '../Components/Pagination';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
        totalResults: '',
        captionSearch: 'matrix',
        type: 'all',
        page: '1'
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&page=${this.state.page}`)
            .then(responce => responce.json())
            .then(data => this.setState({
                movies: data.Search,
                loading: false,
                totalResults: data.totalResults
            }))
            .catch(() => {
                this.setState({ loading: false }); 
                alert("Server connection error");
            })
    }

    searchForCaption = (caption, type='all', page='1') => {
        this.setState({ loading: true, type: type, page: page });

        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${caption}${
                type !== 'all' ? `&type=${type}` : ''
            }&page=${page}`)
            .then(responce => responce.json())
            .then(data => this.setState({
                movies: data.Search,
                loading: false,
                totalResults: data.totalResults,
                captionSearch: caption
            })).catch(() => {
                this.setState({ loading: false }); 
                alert("Server connection error");
            })
    }

    render() {
        const { movies, loading, totalResults, captionSearch, type, page } = this.state;
        return <div className='main'>
            <Search searchForCaption={this.searchForCaption}/>
            {
                totalResults ? (
                <>
                    <h2 className="results">Found { +totalResults || 0 } results for "{ captionSearch }"</h2>
                    <h3 className="showing-results"> Showing {(page - 1) * 10 + 1} - { 
                        totalResults < page * 10 
                            ? totalResults 
                            : page * 10 
                        } results</h3>
                </>
                ) : <p></p>
            }
            
            { 
                loading ? (
                    <div className="preloader"></div>
                    ) : (
                    <Movies movies={ movies }/>
                )
            }
            <Pagination 
                totalResults={ totalResults }
                caption={ captionSearch }
                type={ type }
                page={ page }
                searchForCaption={ this.searchForCaption }
            />
        </div>
    }
}

export { Main };