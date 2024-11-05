export const isMobileDevice = () => {
    const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|WPDesktop/;
    return (
      regex.test(window.navigator.userAgent) ||
      (window.navigator.platform === 'MacIntel' &&
        typeof window.navigator.standalone !== 'undefined')
    );
  };