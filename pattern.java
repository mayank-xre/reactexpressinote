public class pattern{
    static int size;
    public static void print(){
        String pat="";
        String par="";
        String part="";
        for(int i=0;i<size;i++){
            pat="";
            for(int k=i;k<size;k++){
                part+="  ";
            }
            if(i==0){
                par+="1";
                part+=par;
                System.out.println(part);
                part="";
                continue;
            }
            if(i>0){
                par+=" ";
                par=par+String.valueOf(i+1);
                part+=par;
                pat=part;
                for(int j=i;j>0;j--){
                    pat+=" ";
                    pat+=String.valueOf(j);
                }
                part="";
            }
            System.out.println(pat);
        }
    }
    public pattern(int s){
		size=s;
	}
	public static void main(String[] args){
		pattern n=new pattern(9);
	n.print();
}
}
