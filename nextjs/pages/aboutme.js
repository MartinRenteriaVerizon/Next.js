export function getStaticProps({locale}) {
  return {
    props: {
      locale
    }
  }
}

function aboutme(props) {
  return (
    <div>
      <p className="about">
        {props.locale}
        Hi! My name is Martin Renteria and am an Verizon Apprentice on the
        digital marketing team!
      </p>
      <button>
        <a href="/">Home</a>
      </button>
    </div>
  );
}

export default aboutme;
