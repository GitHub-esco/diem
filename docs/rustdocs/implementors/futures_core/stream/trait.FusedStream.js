(function() {var implementors = {};
implementors["channel"] = [{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/hash/trait.Hash.html\" title=\"trait core::hash::Hash\">Hash</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, M&gt; <a class=\"trait\" href=\"https://docs.rs/futures-core/0.3.7/futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"channel/libra_channel/struct.Receiver.html\" title=\"struct channel::libra_channel::Receiver\">Receiver</a>&lt;K, M&gt;","synthetic":false,"types":["channel::libra_channel::Receiver"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/futures-core/0.3.7/futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"channel/struct.Receiver.html\" title=\"struct channel::Receiver\">Receiver</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,&nbsp;</span>","synthetic":false,"types":["channel::Receiver"]}];
implementors["network"] = [{"text":"impl&lt;TMessage&gt; <a class=\"trait\" href=\"https://docs.rs/futures-core/0.3.7/futures_core/stream/trait.FusedStream.html\" title=\"trait futures_core::stream::FusedStream\">FusedStream</a> for <a class=\"struct\" href=\"network/protocols/network/struct.NetworkEvents.html\" title=\"struct network::protocols::network::NetworkEvents\">NetworkEvents</a>&lt;TMessage&gt;","synthetic":false,"types":["network::protocols::network::NetworkEvents"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()