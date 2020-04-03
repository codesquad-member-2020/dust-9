//
//  DustTableViewControllerDelegate.swift
//  Dust
//
//  Created by jinie on 2020/03/31.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class DustTableViewDelegate: NSObject, UITableViewDelegate {
    
    func scrollViewDidScroll(_ scrollView: UIScrollView) {
        let tableView = scrollView as! UITableView
        if let indexPaths = tableView.indexPathsForVisibleRows {
            let firstVisibleRow: [String : Any] = [dustScrollUserInfoKey: indexPaths[0][1]]
            NotificationCenter.default.post(name: dustScrollNotificationName,
                                            object: nil,
                                            userInfo: firstVisibleRow)
        }
    }
    
}
