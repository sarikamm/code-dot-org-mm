/**
 * Installs some default block stubs for use in tests
 * @param blockly
 */
exports.installTestBlocks = function(blockly) {
  blockly.Blocks.empty_block = {
    init: function() {}
  };
  blockly.Blocks.block_with_3_titles = {
    init: function() {
      var displayText = 'dummy text';
      this.appendDummyInput()
        .appendField(displayText, 'A')
        .appendField(displayText, 'B')
        .appendField(displayText, 'C');
    }
  };
};
