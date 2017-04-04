import React, { PropTypes } from 'react'
import { Tree, Icon, Menu, Dropdown, Button } from 'antd'

const TreeNode = Tree.TreeNode

const ButtonGroup = Button.Group

function StartPoint() {
  return (
      <div className="tree-snapshot-start-point">
      </div>
    )
}
function SnapshotIcon() {
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <span>Revert</span>
      </Menu.Item>
      <Menu.Item key="1">
        <span>Backup</span>
      </Menu.Item>
      <Menu.Item key="2">
        <span>Delete</span>
      </Menu.Item>
    </Menu>
  )
  return (
    <Dropdown
      overlay={menu}
      trigger={['click']}
    >
      <div>
        <div className="tree-snapshot-icon">
          <Icon className="snapshot-icon" type="camera" />
        </div>
        <div className="tree-snapshot-desc">
          <p className="snapshot-name">Snapshot Name</p>
          <p className="snapshot-time">created 13:02:04 2017-04-04</p>
        </div>
     </div>
    </Dropdown>
  )
}

function CurrentPoint(){
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <span>Take Snapshot</span>
      </Menu.Item>
    </Menu>
  )
   return (
     <Dropdown
        overlay={menu}
        trigger={['click']}
      >
        <div className="snapshot-current-desc">
          <Button>
            <Icon type="caret-right" />Live Volume
          </Button>
        </div>
      </Dropdown>
   )
}

class Snapshot extends React.Component {
  render() {
    return (
        <Tree
          defaultExpandAll
          ref="snapshotTree"
          id="snapshotTree"
          className="lh-tree-snapshot"
        >
          <TreeNode title={StartPoint()} disabled key="0-0">
            <TreeNode title={SnapshotIcon()} key="0-0-2">
              <TreeNode title={SnapshotIcon()} key="0-0-2-0" />
              <TreeNode title={SnapshotIcon()} key="0-0-1-2" />
              <TreeNode title={SnapshotIcon()} key="0-0-1-1">
                <TreeNode title={SnapshotIcon()} key="0-0-2-5" />
                <TreeNode title={SnapshotIcon()} key="0-0-2-7">
                  <TreeNode title={SnapshotIcon()} key="1-0-2-5" />
                  <TreeNode title={SnapshotIcon()} key="1-0-2-7">
                    <TreeNode title={CurrentPoint()} key="1-0-2-10" />
                  </TreeNode>
                </TreeNode>
              </TreeNode>
              <TreeNode title={SnapshotIcon()} key="0-0-2-11" />
            </TreeNode>
          </TreeNode>
        </Tree>
    )
  }
}

Snapshot.propTypes = {
  snapshot: PropTypes.object,
}

export default Snapshot