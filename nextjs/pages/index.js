import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'


export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translation"])),
    },
  };
}

export default function Home(props) {
  const { t } = useTranslation();

  return (
    <div>
      <Head>
        <title>Next.js</title>
      </Head>

      <h1 style={{ textAlign: "center" }}>Welcome to the home page!</h1>
      <h1>{t("translation:welcome")}</h1>
      <p>{props.locale}</p>
      <button>
        <a href="/aboutme">About Me</a>
      </button>
      <button>
        <a href="/productStore">ProductStore API Demo</a>
      </button>
      <button>
        <a href="/idleTimer">Idle Timer</a>
      </button>
      <button>
        <a href="/countButton">CountButton</a>
      </button>
      <button>
        <a href="/searchBar">SearchBar</a>
      </button>
      <button>
        <a href="/intentToLeave">Back Alert</a>
      </button>
      <button>
        <a href="/intentToLeave">Back Alert</a>
      </button>
      <button>
        <a href="/accessibility">Accessibility Demo</a>
      </button>
      <button>
        <a href="/focus">Focus</a>
      </button>
      <button>
        <a href="/iframe-parent">Iframe Example</a>
      </button>
    </div>
  );
}
