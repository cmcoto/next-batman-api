import Layout from "../../components/MyLayout.js";
import fetch from "isomorphic-unfetch";

const Post = props => (
  <Layout>
    <h1>{props.show.name}</h1>
    <h2>Rating: {props.show.rating.average}</h2>

    <p>{props.show.summary.replace(/<[/]?p>/g, "")}</p>
    <p>Premiered on: {props.show.premiered}</p>
    <img src={props.show.image.medium} />
    <p>Type: {props.show.type}</p>
    <p>Status: {props.show.status}</p>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  console.log(`Fetched show: ${show.name}`);
  console.log(show);

  return { show };
};

export default Post;
