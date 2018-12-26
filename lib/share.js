function denyMetamask() {
  const expire = window.localStorage.getItem('metamask-deny');
  return new Date(expire) > new Date();
}

function setDenyMetamask() {
  let d = new Date();
  d.setHours(d.getHours() - 12);
  window.localStorage.setItem('metamask-deny', d);
}

let firstRun = true;

export async function tryEnableWeb3(loginTrigger) {
  try {
    if (
      loginTrigger ||
      (firstRun && !denyMetamask())
    ) {
      firstRun = false;
      await window.ethereum.enable();
    }
  } catch (e) {
    setDenyMetamask();
  }
  firstRun = false;
}
