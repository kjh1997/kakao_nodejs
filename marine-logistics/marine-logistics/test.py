 # 패배 여부 확인
    def is_lose(self):
        # 돌 5개 연결 여부
        
    def is_comp(x, y, dx, dy):
        c = 0
        while True:
            if not(y >= 0 and y <= 14 and x >= 0 and x <= 14) or \
                self.enemy_pieces[x+(y*15)] == 0:
                break
            x, y = x+dx, y+dy
            c += 1
        return c

    for i in range(225):
        ix = i % 15
        iy = i // 15
        dist_list = [(1,0,-1,0),(0,1,0,-1),(1,1,-1,-1),(1,-1,-1,1)]
        for dx1,dy1,dx2,dy2 in dist_list:
            piece_count = is_comp(ix,iy,dx1,dy1) + is_comp(ix,iy,dx2,dy2) - 1
            if(self.is_first_player()):
                if(piece_count >= 5):
                    return True
            else:
                if(piece_count == 5):
                    return True
    return False