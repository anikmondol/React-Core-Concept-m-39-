import './Post.css'

export default function Post({post}){
    const {title, id, body, userId} = post;
    return (
        <div className='post'>
            <h3>Title: {title}</h3>
            <h5>UserId: {userId}</h5>
            <h3>Post Id: {id}</h3>
            <p>{body}</p>
        </div>
    )
}