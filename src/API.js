import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './imageList';

class API extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (data) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: data },
            headers: {
                Authorization: `Client-ID CBK2doYn3NRP6Tk-RtGb4yGFUzYq4oNEd6KPXjoEfCA`
            }
        })

        if (response.data.results.length!==0){
            this.setState({ images: response.data.results })
        } else{
            alert("No Data Found!!!")
        }        
    }

    render() {
        return (
            <div>
                <SearchBar userSubmit={this.onSearchSubmit} />
                <ImageList foundImages={this.state.images} />
            </div>
        )
    }

}

export default API;


