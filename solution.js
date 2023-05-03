// Without Rec... 
function checkWord( board, word ) 
{
  let N = board.length;
  for(let i = 0; i < N; i++)
  {
    for(let j = 0; j < N; j++)
    {
      if(board[i][j] == word[0])
      {
        let Q = [ [word[0],i,j,0] ];
        let k = 0;
        
        let steps = [[1,0],[-1,0],
                     [0,1],[0,-1],
                     [1,1],[1,-1],
                     [-1,1],[-1,-1]];
        let vis = new Set();
        while(Q.length)
        {
          [l, r, c, p] = Q.shift();
          let key = r + "," + c;
          vis.add(key);
          k = p;
          let setkeys = vis.values();
          vis = new Set();
          let e = 0;
          for(let entry of setkeys)
            if(e++ < p)
              vis.add(entry);
            
          if(k == word.length-1 && l == word[word.length - 1])
            return true;
          let added = false;
          for(let s of steps)
          {
            let x = s[0];
            let y = s[1];
            if(bounds(r+x,c+y,N))
            {
              let key = (r+x) + "," + (c+y);
              let el = board[r+x][c+y];
              if(vis.has(key))
                continue;
              if(el == word[k+1])
                Q.push([el,r+x,c+y, k+1]),added = true, vis.add(key);
            }
          }
          
            if(added)
              k++;
        }
      
      }
    }
  }
  return false;
}
  
  
function bounds(r,c,N)
{
 return r>=0 && r<N && c>=0 && c<N;
}
