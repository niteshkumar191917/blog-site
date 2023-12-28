import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";
import styles from './Home.module.css'


function AllPosts() {
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
                setLoader(false)
            }
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {loader && <p className={`${styles.loader} mx-auto`}></p>}
                    {!loader &&
                        posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/2 lg:w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default AllPosts