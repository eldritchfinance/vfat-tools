$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Boba Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Oolong Swap           ", `<a href='oolong'     >Various</a>`,"OLO          ","https://oolongswap.com"],
      ["Synapse               ", `<a href='synapse'    >Various</a>`,"SYN          ","https://synapseprotocol.com"]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
