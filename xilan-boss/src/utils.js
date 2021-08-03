export function getRedirectPath({ type, avatar }) {
  // 根据用户信息 返回跳转地址
  // user.type /boss /geninus
  // user.avatar /bossinfo /geninusinfo
  let url = type == "boss" ? "/boss" : "genius";
  if (!avatar) {
    url += "info";
  }
  return url;
}
