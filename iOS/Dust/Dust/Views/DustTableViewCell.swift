//
//  DustTableViewCell.swift
//  Dust
//
//  Created by jinie on 2020/03/31.
//  Copyright © 2020 jinie. All rights reserved.
//

import UIKit

class DustTableViewCell: UITableViewCell {
    
    @IBOutlet weak var dustBar: UIView!
    @IBOutlet weak var dustValue: UILabel!

    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
}
