const ImpressumPage = () => null;

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/datenschutz",
      permanent: false
    }
  };
};

export default ImpressumPage;

