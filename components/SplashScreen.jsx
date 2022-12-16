import React, { useEffect, useState } from 'react';

const SplashScreen = ({ data }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  if (loading) {
    return (
      <div id="splash" className="fixed top-0 left-0 right-0 bottom-0 bg-white flex items-center justify-center z-9999">
        <div className="border-5 rounded-full border-t-5 border-blue-500 w-16 h-16 animate-spin">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      {/* render data here */}
    </div>
  );
};

SplashScreen.getInitialProps = async () => {
  const data = await fetchData();
  return { data };
};

export default SplashScreen;
