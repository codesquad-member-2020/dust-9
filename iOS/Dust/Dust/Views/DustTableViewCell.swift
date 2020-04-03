//
//  DustTableViewCell.swift
//  Dust
//
//  Created by jinie on 2020/03/31.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class DustTableViewCell: UITableViewCell {
    
    @IBOutlet weak var bar: UIView!
    @IBOutlet weak var label: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
}
