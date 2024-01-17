import React from 'react'

export const BadgeItem: React.FC<boolean> = (hasFeature) => {
  return hasFeature ? <div className="badge badge-success">Yes</div> : <div className="badge badge-error">No</div>
}
