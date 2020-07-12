import React from 'react';
import Meme from './Meme';
import Search from './Search'
import { getHotImages, getSearchImages } from '../services/imgurImages';

class MemeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      home: [],
      isFetch: true
    }
  }
  
  async componentDidMount() {
    //API de imgur para obtener mi lista imagenes hot virales
    const responseJson = await getHotImages()
    this.setState({
      posts: responseJson.data,
      home: responseJson.data,
      isFetch: false
    });
  }

  handleSearch = async (q) => {
    //API de imgur para buscar posts
    const { isFetch, home } = this.state
    // Si el usuario no agregó nada en el searchbar, regresa el backup de posts contenido en el state home
    if (!q.length && !isFetch) {
      this.setState({
        posts: home
      });
    } else {
      const responseJson = await getSearchImages(q);
      this.setState({
      posts: responseJson.data
    });
    }
  }

  render() {
    const { isFetch, posts } = this.state
    return (
      <>
      <Search handleSearch={ this.handleSearch }/>

      { isFetch && <h2>Loading...</h2> }

      { (!isFetch && !posts.length) && <h2>No posts founded. Try another search.</h2> }

        <section className='posts-container'>
        {
          posts.map(post => (
            <Meme 
              key={ post.id } 
              name={ post.title }
              image={ post.is_album ? post.images[0].link : post.link }
              type={ post.is_album ? post.images[0].type : post.type }
              postId={ post.id }
            />
          ))
        }
      </section>
      </>
    )
  }
}

export default MemeContainer;
