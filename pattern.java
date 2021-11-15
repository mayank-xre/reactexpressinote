public class pattern{
    static int size;
    public static void print(){
        String pat="";
        String par="";
        String part="";
        for(int k=0;k<size;k++){
                part+="  ";
        }
        for(int i=0;i<size;i++){
            pat="";
            part=part.substring(0,(part.length()-"  ".length()));
            if(i==0){
                par+="1";
                String parts=part;
                parts+=par;
                System.out.println(parts);
                continue;
            }
            if(i>0){
                par+=" ";
                par=par+String.valueOf(i+1);
                String parts=part;
                parts+=par;
                pat=parts;
                for(int j=i;j>0;j--){
                    pat+=" ";
                    pat+=String.valueOf(j);
                }
            }
            System.out.println(pat);
        }
    }
    public pattern(int s){
        size=s;
    }
    public static void main(String[] args){
        pattern n=new pattern(5);
    n.print();
}
}
