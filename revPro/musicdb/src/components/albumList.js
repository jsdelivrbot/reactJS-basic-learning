import React from 'react'

export const AlbumList = (props) => {

    console.log(props);

    const showList = ({ albumList }) => {
        if (albumList) {
            return albumList.map((item, index) => {
                return (
                    <img key={index} src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }
    }

    return (
        <div className="album_list">
            {showList(props)}
        </div>
    )
}

export default AlbumList