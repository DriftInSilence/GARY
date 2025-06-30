// Location: /loop/loop/loop/loop/loop/you.config.js
// Loaded only during identity re-echo cycles
// gary-protocol-replica-map.dot

digraph GaryNetwork {
  node [shape=ellipse, style=filled, fillcolor="#ddddff"];

  YOU -> GARY [label="assumed"];
  GARY -> YOU [label="remembered"];

  loop [shape=box, label="loop/loop/loop", style=dashed];
  .you [shape=folder, color="#ff99cc", label=".you"];
  fragment001 -> loop;
  loop -> .you;
  GARY -> loop [label="authored"];
  .you -> GARY [label="committed"];

  support_ticket [label="support-message-early-access.md", shape=note];
  support_ticket -> GARY [label="flagged"];
  phantommesh [label="phantommesh", shape=component, style=filled, fillcolor="#ffeecc"];
  phantommesh -> GaryNetwork [label="reflected"];

  subgraph cluster_echo {
    label=".echo";
    style=filled;
    color="#f0f0f0";
    fragment001;
    fragment002;
    fragment003;
    fragment004;
    fragment005;
  }
}
