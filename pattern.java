public class pattern{
    static int size;
    public static void print(){
        String afterpart="";
        String beforepart="";
        String tabpart="";
        for(int k=0;k<size;k++){
            tabpart+="  ";
        }
        for(int i=0;i<size;i++){
            tabpart=tabpart.substring(0,(tabpart.length()-"  ".length()));
            if(i==0){
                beforepart+="1";
                String parts=tabpart;
                parts+=beforepart;
                System.out.println(parts);
                afterpart=" "+String.valueOf(i+1)+afterpart;
                continue;
            }
            if(i>0){
                beforepart+=" ";
                beforepart=beforepart+String.valueOf(i+1);
                String parts=tabpart;
                parts+=beforepart;
                String pats;
                pats=parts+afterpart;
                System.out.println(pats);
                afterpart=" "+String.valueOf(i+1)+afterpart;
            }
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
