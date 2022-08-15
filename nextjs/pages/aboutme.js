import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'


export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["translation"])),
    },
  }
}

 function aboutme(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <div>
      <p className="about">
        <h1>{t("translation:welcome")}</h1>
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