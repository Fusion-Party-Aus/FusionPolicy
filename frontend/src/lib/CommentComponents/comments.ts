import type { WorkstreamComment } from "$lib/Interfaces";

export function nestComments(c: WorkstreamComment[]): WorkstreamComment[] {
  const flatComments = [...c]
  
    const findParent = (flatComment: WorkstreamComment, nestedComments: WorkstreamComment[]): boolean => {
      return nestedComments.some((comment) => {
        let found = false;
        if (comment.id === flatComment.parent) {
          comment.children?.push({ ...(flatComment as WorkstreamComment), children: [] });
          return true;
        }
  
        if (comment.children) {
          found = findParent(flatComment, comment.children);
        }
  
        return found;
      });
    };
  
    const nestedComments: WorkstreamComment[] = [];
  
    while (flatComments.length > 0) {
      for (let i = flatComments.length - 1; i >= 0; i--) {
        const comment = flatComments[i];
        
        if (comment.parent) {
          const foundParent = findParent(comment, nestedComments);
          if (foundParent) {
            flatComments.splice(i, 1);
          }
        } else {
          nestedComments.push({ ...(comment as WorkstreamComment), children: [] });
          flatComments.splice(i, 1);
        }
      }
    }

    return nestedComments;
  }